from django.db import models


class Game(models.Model):
    date_played = models.CharField(max_length=30)
    opposing_team_name = models.CharField(max_length=100)
    opposing_score = models.IntegerField()
    brentford_score = models.IntegerField()
    brentford_victory = models.BooleanField()
