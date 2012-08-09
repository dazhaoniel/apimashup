from django.db import models

# Create your models here.
class Restaurant(models.Model):
	name = models.CharField(max_length=200)
	lat = models.FloatField()
	lng = models.FloatField()
	url = models.URLField(unique=True)
	cat = models.CharField(max_length=200)
