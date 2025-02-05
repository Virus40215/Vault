from django.http import JsonResponse
from django.views import View
from backend_vault.models import Snippet


class GetAllSnippets(View):
    """
    Get all snippets and the obj keys
    """
    def get(self, request, *args, **kwargs):
        try:
            snippets = list(Snippet.objects.values())
            keys = list(snippets[0].keys())

            
            
            
            if not snippets:
                return JsonResponse({'error': 'No snippets found'}, status=404)
            return JsonResponse({"snippets": snippets, "keys": keys}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Server error: {str(e)}'}, status=500)