from django.http import JsonResponse

# Create your views here.
def get_all_games(request):
    data = {
            'some': 'test data'
            }
    return JsonResponse(data)
