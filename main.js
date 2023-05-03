window.fbAsyncInit = function() {
  FB.init({
    appId: '968542564276719',
    cookie: true,
    xfbml: true,
    version: 'v16.0'
  });

  FB.AppEvents.logPageView();
};


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // User is logged in and has granted permissions
      window.location.href = '/dashboard.html';
      fetchMetricsData(response.authResponse.accessToken);
    } else {
      // User is not logged in or has not granted permissions
      console.log('User not logged in or permissions not granted');
    }
  });
}