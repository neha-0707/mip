from django.db import models

# Create your models here.
# class Users(models.Model):
#     UserId = models.AutoField(primary_key=True)
#     UserPassword = models.CharField(max_length=50)


class Stock(models.Model):
    StockID=models.AutoField(primary_key=True)
    High=models.DecimalField(decimal_places=2, max_digits=10)
    Low=models.DecimalField(decimal_places=2, max_digits=10)
    Change=models.DecimalField(decimal_places=2, max_digits=10)
    Previous_close=models.DecimalField(decimal_places=2, max_digits=10)
    Symbol=models.CharField(max_length=10)
    Company_name=models.CharField(max_length=256)
    
    


class Watchlists(models.Model):
    WatchlistID=models.AutoField(primary_key=True)
    StockID=models.ForeignKey(Stock,on_delete=models.CASCADE)

class Portfolios(models.Model):
    PortfolioID=models.AutoField(primary_key=True)
    StockID=models.ForeignKey(Stock,on_delete=models.CASCADE)
    NumberOfStocks=models.IntegerField()

class User(models.Model):
    UserID = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=15)
    Usermoney = models.DecimalField( blank=False, null=False, decimal_places=2, max_digits=10)
    Userpassword = models.CharField(blank=False, null=False, max_length=50)
    PortfolioID=models.ForeignKey(Portfolios,on_delete=models.CASCADE)
    WatchlistID=models.ForeignKey(Watchlists,on_delete=models.CASCADE)

class Transactions(models.Model):
    TransactionID=models.AutoField(primary_key=True)
    UserID=models.ForeignKey(User,on_delete=models.CASCADE)
    Timestamp=models.DateTimeField(auto_now_add=True)
    Price=models.DecimalField( blank=False, null=False, decimal_places=2, max_digits=10)
    Quantity=models.IntegerField(null=False)
    isSold=models.BooleanField(default=False)   
    StockID=models.ForeignKey(Stock,on_delete=models.CASCADE)



class Leaderboard(models.Model):
    LeaderboardID=models.AutoField(primary_key=True)
    UserID=models.ForeignKey(User, on_delete=models.CASCADE)
    Timestamp=models.DateTimeField(auto_now_add=True)
    Unrealizedvalue = models.DecimalField( blank=False, null=False, decimal_places=2, max_digits=10)
    Realizedvalue = models.DecimalField( blank=False, null=False, decimal_places=2, max_digits=10)





