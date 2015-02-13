function dmProject(project_sid) {
    this.project_sid = project_sid;

    this.get_potential_matches = function () {
      $.ajax({
        type: 'GET',
        url: "/matches",
        contentType: "application/json",
        data: {project: "project_sid "},
      }).done(function(response) {
        cosole.log(response)
      });
    }

    this.set_match = function (potential_matched_id) {
      "Yay"
    }

    this.get_matched = function () {
      "yay"
    }

    this.get_user_details = function () {
      "Yay"
    }

    this.project_detail_schema = function(){
      "Yay"
    }

    this.set_user_details = function () {
      "Yay"
    }

}
