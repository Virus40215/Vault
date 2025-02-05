from rest_framework import serializers
from backend_vault.models import Snippet


class CreateSnippetSerializer(serializers.ModelSerializer):
  class Meta:
    model = Snippet
    fields = ['title', 'language', 'description', 'code']