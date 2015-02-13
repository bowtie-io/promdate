function dmProject(project_sid, user) {
    this.project_sid = project_sid;


    this.get_potential_matches = function () {
        $.get("/dm_users",
        {
          project_id: this.project_sid, user_id: "62", user_name: user.name, user_email: user.email
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        }, "json" );
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
