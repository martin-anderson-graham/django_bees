from django.urls import path
from .views import get_all_games

urlpatterns = [
        path("", get_all_games, name="get_all_games"),
        ]
