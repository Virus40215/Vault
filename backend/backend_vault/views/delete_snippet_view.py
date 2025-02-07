from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from backend_vault.models import Snippet

class DeleteItemView(APIView):
    def delete(self, request, id, *args, **kwargs):
        try:
            item = get_object_or_404(Snippet, id=id)
            item.delete()
            return Response({"message": f"Item with ID {id} deleted."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
