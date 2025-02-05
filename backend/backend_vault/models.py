from django.db import models

# Create your models here.
class Snippet(models.Model):
    title = models.CharField(max_length=255, null=False) 
    language = models.CharField(max_length=50, null=False)
    description = models.TextField(blank=True, null=True) 
    code = models.TextField(blank=False, null=False)  
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title