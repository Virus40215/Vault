from django.http import JsonResponse
from django.views import View
from backend_vault.models import Snippet


class GetAllSnippets(View):
    """
    Get all snippets and filter by user_id if provided.
    """

    def get(self, request, id=None, *args, **kwargs):  
        try:
            if id:
                snippets = list(Snippet.objects.filter(user_id=id).values()) 
            else:
                snippets = list(Snippet.objects.values())  
            if not snippets:
                return JsonResponse({'error': 'No snippets found'}, status=404)

            keys = list(snippets[0].keys()) if snippets else []

            return JsonResponse({"snippets": snippets, "keys": keys}, status=200)
        
        except Exception as e:
            return JsonResponse({'error': f'Server error: {str(e)}'}, status=500)