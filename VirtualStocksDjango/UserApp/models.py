from django.db import models

# Create your models here.
# class Users(models.Model):
#     UserId = models.AutoField(primary_key=True)
#     UserPassword = models.CharField(max_length=50)

class User(models.Model):
    UserID = models.CharField(primary_key=True, max_length=15)
    UserMoney = models.DecimalField( blank=False, null=False, decimal_places=2, max_digits=10)
    UserPassword = models.CharField(blank=False, null=False, max_length=50)
    PortfolioID=models.ForeignKey('Portfolio.Portfolio')