from rest_framework import serializers, status
from .models import User, Watchlists, Portfolios


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'UserID',
            'Username',
            'Usermoney',
            'Userpassword',
            'PortfolioID',
            'WatchlistID'
        ]
        read_only_fields = [
            'PortfolioID',
            'UserID',
            'WatchlistID'
        ]
        extra_kwargs = {
            'Userpassword': {'write_only': True}
        }


class RegistrationSerializer(serializers.ModelSerializer):
    ConfPassword = serializers.CharField(
        style={'input-type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = [
            'Username',
            'Userpassword',
            'ConfPassword',
        ]
        extra_kwargs = {
            'Userpassword': {'write_only': True}
        }

    def save(self):
        user = User()
        watchlist = Watchlists()
        portfolio = Portfolios()

        unameInp = self.validated_data['Username']
        password = self.validated_data['Userpassword']
        password2 = self.validated_data['ConfPassword']

        if User.objects.filter(Username=unameInp).exists():
            raise serializers.ValidationError(
                {'usernameError': 'Username already exists'})

        if password != password2:
            raise serializers.ValidationError(
                {'passwordError': 'Passwords do not match'})

        user.Username = unameInp
        user.Userpassword = password

        watchlist.save()
        portfolio.save()

        user.PortfolioID = portfolio
        user.WatchlistID = watchlist

        user.save()

        return user
