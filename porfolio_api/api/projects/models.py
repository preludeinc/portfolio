from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.IntegerField()

    def _str_(self):
        return self.title
