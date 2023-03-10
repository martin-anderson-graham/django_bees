# Generated by Django 4.1.6 on 2023-02-10 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_played', models.CharField(max_length=30)),
                ('opposing_team_name', models.CharField(max_length=100)),
                ('opposing_score', models.IntegerField()),
                ('brentford_score', models.IntegerField()),
                ('brentford_victory', models.BooleanField()),
            ],
        ),
    ]
