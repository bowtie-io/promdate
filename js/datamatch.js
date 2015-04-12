$("html").on("click", "a.export_link", function(e) {
  $('#myModal').modal('toggle')
  e.preventDefault();
});



function dmProject(project_sid) {

    this.project_sid = project_sid;

    this.get_potential_matches = function () {

    $.ajax({
        type: "GET",
        url: "/dm_users",
        cache: false,
        data: {project_sid: project_sid},
        success: function (data) {
          show_potentials(data.potential_matches);
        },
        error: function (xhr, status, err) {
          console.log(status);
        },
     dataType: "json"
    });

    function show_potentials (potentials) {
      $.each(potentials, function(index, value) {

        $.ajax({
            type: "GET",
            url: "/dm_users/"+value,
            cache: false,
            data: {project_sid: project_sid},
            success: function (data) {
              fill_user(data);
            },
            error: function (xhr, status, err) {
              console.log("something is wrong")
            },
         dataType: "json"
        });

        function fill_user(details){
            var template = $("#potential_match_template").html();
            tagged = parse_user_tags(details.tags);

            $("#potential_matches").append(template.
              replace(/%id%/g, value).
              replace(/%name%/g, details.user.name).
              replace(/%tags%/g, tagged).
              replace(/%details%/g, details.details));
        }

        function parse_user_tags(tags){
          if(tags){
            tag_ar = tags.split(", ")
            var tag_group = "";
            $.each( tag_ar, function( key, value ) {
              tag_group = tag_group.concat('<li class="label label-warning">'+value+'</li>');
            });
            return tag_group;
          }else{
            return "no tags";
          }
        }
      });
    }


    }









    this.get_actual_matches = function () {

      $.ajax({
          type: "GET",
          url: "/matches",
          cache: false,
          data: {project_sid: project_sid},
          success: function (data) {
            console.log(data);
            show_matches(data.matches);
          },
          error: function (xhr, status, err) {
            console.log(status);
          },
       dataType: "json"
      });

      function show_matches (potentials) {


        $("span#match_number").html(potentials.length + "!");


        $.each(potentials, function(index, value) {

          $.ajax({
              type: "GET",
              url: "/dm_users/"+value,
              cache: false,
              data: {project_sid: project_sid},
              success: function (data) {
                console.log(data);
                fill_match(data)
              },
              error: function (xhr, status, err) {
                console.log("something is wrong")
              },
           dataType: "json"
          });
          function fill_match(details){
            console.log(details);

            var template = $("#match_template").html();
            tagged = parse_user_tags(details.tags);

            $("#actual_matches").append(template.
              replace(/%id%/g, value).
              replace(/%name%/g, details.user.name).
              replace(/%tags%/g, tagged).
              replace(/%email%/g, details.user.email).
              replace(/%details%/g, details.details));



          }


          function parse_user_tags(tags){
            if(tags){
              tag_ar = tags.split(", ")
              var tag_group = "";
              $.each( tag_ar, function( key, value ) {
                tag_group = tag_group.concat('<li class="label label-warning">'+value+'</li>');
              });
              return tag_group;
            }else{
              return "no tags";
            }
          }





        });
      }



    }


















    $("html").on("click", "a#info", function(e) {
      e.preventDefault();
      $(this).parent().parent().children(".info_block").slideToggle();
    });

    $("html").on("click", "span.close", function(e) {
      e.preventDefault();
      $(this).parent().slideToggle();
    });


    $("html").on("click", "a#ya", function(e) {
      e.preventDefault();
      user = $(this).attr("data-user");
      $.ajax({
          type: "POST",
          url: "/matches",
          data: {matched_id: user, decision:true, project_sid: project_sid},
          success: function (data) {
            $("li#"+user).slideToggle();
          },
          error: function (xhr, status, err) {
          },
       dataType: "json"
      });
    });

    $("html").on("click", "a#na", function(e) {
      e.preventDefault();
      user = $(this).attr("data-user");

      $.ajax({
          type: "POST",
          url: "/matches",
          data: {matched_id: user, decision:false,project_sid: project_sid},
          success: function (data) {
            $("li#"+user).slideToggle();
          },
          error: function (xhr, status, err) {
          },
       dataType: "json"
      });
    });

}
