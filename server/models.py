from django.db import models

# Create your models here.

class Post(models.Model):

    # id field created automatically
    id = models.AutoField(primary_key=True)

    title = models.CharField(max_length=120)
    body = models.TextField()
    posted = models.DateTimeField(auto_now_add=True)
    user = models.CharField(max_length=120)
    protected = models.BooleanField(default=False)

    def _str_(self):
        return self.title