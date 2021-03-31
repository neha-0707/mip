from rest_framework import serializers, status
from .models import User, Watchlists, Portfolios


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['Username', 'Userpassword']


class RegistrationSerializer(serializers.ModelSerializer):
    # WatchlistID = serializers.PrimaryKeyRelatedField(
    #     queryset=User.objects.all())

    # PortfolioID = serializers.PrimaryKeyRelatedField(
    #     queryset=User.objects.all())

    ConfPassword = serializers.CharField(
        style={'input-type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = [
            'Username',
            'Userpassword',
            'ConfPassword',
            # 'PortfolioID',
            # 'ConfPassword'
        ]
        extra_kwargs = {
            'Userpassword': {'write_only': True}
        }

    def save(self):
        user = User()
        watchlist = Watchlists()
        portfolio = Portfolios()

        user.Username = self.validated_data['Username']

        password = self.validated_data['Userpassword']
        password2 = self.validated_data['ConfPassword']

        if password != password2:
            raise serializers.ValidationError(
                {'password': 'Passwords do not match'})

        user.Userpassword = password

        watchlist.save()
        portfolio.save()
        user.save()

        response = {
            'user': user,
            'watchlist': watchlist,
            'portfolio': portfolio
        }

        return response
