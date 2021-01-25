var jq = jQuery.noConflict();
jq(document).ready(function () {
  var pathname = window.location.pathname;
  var split = pathname.split('/');
  var length = split.length;
  var filename = split[length - 1];
  if(filename == 'index.html') {
  jq('.admin-dashboard-table').empty();
  jq.ajax({
    type: 'GET',
    url: "https://prepaid.mediagroupcenter.fr/services/users.php",
    success: function (data) {
    if(data) {
      var parsedData = JSON.parse(data);
    frameDashboard = '<table class="table"><tr><th>Id</th><th>Full Name</th><th>Gender</th><th>Address</th><th>City</th><th>State</th><th>Phone</th><th>Email</th><th>Date Of Birth</th><th>Edit</th><th>Delete</th></tr>';
    jq(parsedData).each(function (idx, obj) {
      frameDashboard = frameDashboard + '<tr><td>' + obj.id + '</td><td>' + obj.f_name + ' ' + obj.l_name + '</td><td>' + obj.gender + '</td><td>' + obj.address + '</td><td>' + obj.city + '</td><td>' + obj.state + '</td><td>' + obj.phone + '</td><td>' + obj.email + '</td><td>' + obj.date_of_birth + '</td><td><a href="#" class="text-success content-link"><i class="far fa-edit"></i></a></td><td><a href="#" class="text-danger delete" name="admin_profile"><i class="far fa-trash-alt"></i></a></td></tr>';
    });
    frameDashboard = frameDashboard + '</tr></tbody></table>';
    jq('.admin-dashboard-table').html(frameDashboard);
  } else {
    jq('.admin-dashboard-table').html("<p class='no-data'>No Data</p>");
  }
    },
    error: function (data) {
      console.log(data, 'error');
    }
  });
}
});
