from django.db import models

# Create your models here.
class Users(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserPassword = models.CharField(max_length=50)