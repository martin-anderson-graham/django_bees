from django.http import JsonResponse
from .models import Game
# Create your views here.


def get_all_games(request):
    qs = list(Game.objects.all())
    all_games = []
    for query in qs:
        all_games.append({
            "id": query.id,
            "date_played": query.date_played,
            "opposing_team_name": query.opposing_team_name,
            "opposing_score": query.opposing_score,
            "brentford_score": query.brentford_score,
            "brentford_victory": query.brentford_victory
        })
    return JsonResponse({"games": all_games})
