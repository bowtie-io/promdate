
function handleErrorResponse(response){
  if(response.detail == 'profile-required'){
    bowtie.user.profile(function(profile){
      if(!profile.tags || !profile.info){
        window.location.replace("/profile/");
      }
    });
  }else if(respones.detail == 'session-required'){
    window.location.replace("/users/sign_in");
  }
}

function dmProject() {
  var potential_match_set_remaining = 0;

    var get_potential_matches = this.get_potential_matches = function() {
      $("#loader").show();

        $.ajax({
            type: "GET",
            url: "/matches/potential",
            cache: false,
            success: function(response) {
              if(response.status == 'error'){
                handleErrorResponse(response);
                show_potentials([]);
              }else{
                show_potentials(response.data);
              }
            },
            error: function(xhr, status, err) {
                console.log(status);
            },
            dataType: "json"
        });

        function show_potentials(potentials) {
          $("#loader").hide();

          if(potentials.length == 0){
            $("#potential_matches").html("There aren't any matches for you yet. Try again in a few minutes!");
            return;
          }

          potential_match_set_remaining = potentials.length;

            $.each(potentials, function(index, profile) {
                fill_user(profile);

                function fill_user(profile) {
                    var template = $("#potential_match_template").html();
                    tagged = parse_user_tags(profile.tags);

                    $("#potential_matches").append(
                        template
                          .replace(/%id%/g, profile.id)
                          .replace(/%name%/g, profile.name)
                          .replace(/%tags%/g, tagged)
                          .replace(/%info%/g, profile.info));
                }

                function parse_user_tags(tags) {
                  var tag_group = "";
                  $.each(tags, function(key, value){
                    tag_group = tag_group.concat('<li class="label label-warning">' + value + '</li>');
                  });
                  return tag_group;
                }
            });
        }
    }

    this.get_actual_matches = function() {
        $.ajax({
            type: "GET",
            url: "/matches/confirmed",
            cache: false,
            success: function(response) {
              if(response.status == 'error'){
                handleErrorResponse(response);
                show_matches([]);
              }else{
                show_matches(response.data);
              }
            },
            error: function(xhr, status, err) {
                console.log(status);
            },
            dataType: "json"
        });

        function show_matches(potentials) {
          if(potentials.length == 0){
            $("#actual_matches").html("No matches for you yet. Try browsing for some!");
            return;
          }

            $("span#match_number").html(potentials.length + "!");
            $.each(potentials, function(index, value) {
              fill_match(value);

                function fill_match(profile) {
                    var template = $("#match_template").html();
                    tagged = parse_user_tags(profile.tags);
                    $("#actual_matches").append(
                        template.replace(/%id%/g, profile.id)
                          .replace(/%name%/g, profile.name)
                          .replace(/%tags%/g, tagged)
                          .replace(/%email%/g, profile.email)
                          .replace(/%info%/g, profile.info));
                }

                function parse_user_tags(tags) {
                    if (tags) {
                        var tag_group = "";
                        $.each(tags, function(key, value){
                          tag_group = tag_group.concat('<li class="label label-warning">' + value + '</li>');
                        });
                        return tag_group;
                    } else {
                        return "no tags";
                    }
                }
            });
        }
    }





    this.edit_profile = function(){
      bowtie.user.profile(function(profile){
        fill_profile(profile);
      });

      $("#avatar").on("change", function(){
        var file = this.files[0];

        if(file){
           var fr = new FileReader();
           fr.onload = function () {
             console.log(fr.result);
             $("img.avatar").each(function(){
               this.src = fr.result;
             });
           }
           fr.readAsDataURL(file);
        }
      });

      function fill_profile(profile){
        $("#user_info").val(profile.info);

        if(profile.tags == ""){
          $('#profile-tags li').addClass("inactive");
        }else{
          tag_ar = (profile.tags || "").split(", ");

          $.each(tag_ar, function(index, value) {
            $('#profile-tags li:contains("'+value+'")').removeClass("inactive");
          });
        }

        if(profile.avatar){
          $("img.avatar").attr("src", profile.avatar.url);
        }



      }

      $("html").on("click touchstart", "ul#profile-tags li", function(e) {
          e.preventDefault();
          $(this).toggleClass("inactive");
      });



      $("html").on("click touchstart", "#update_profile", function(e) {
          e.preventDefault();

          var tags = $('ul#profile-tags li:not(.inactive)').map(function(){
              return $(this).text();
          });

          var profileData = {
            info: $("#user_info").val(),
            tags: Array.prototype.slice.call(tags).join(", ")
          };

          var avatar = $("#avatar").get(0).files[0];
          if(avatar){ profileData.avatar = avatar; }

          bowtie.user.profile(profileData, function(){
            window.location.replace("/profile/");
          });
      });








    }




    $("html").on("click touchstart", "a#info", function(e) {
        e.preventDefault();
        $(this).parent().parent().children(".info_block").slideToggle();
    });
    $("html").on("click touchstart", "span.close", function(e) {
        e.preventDefault();
        $(this).parent().slideToggle();
    });
    $("html").on("click touchstart", "a#ya", function(e) {
        e.preventDefault();
        user_id = $(this).attr("data-user");
        $.ajax({
            type: "POST",
            url: "/matches/" + user_id + "/accept",
            data: { a: 1 },
            success: function(data) {
              $("li#" + user_id).slideToggle();

              potential_match_set_remaining -= 1;

              if(potential_match_set_remaining <= 0){
                get_potential_matches();
              }
            },
            error: function(xhr, status, err) {},
            dataType: "json"
        });
    });
    $("html").on("click touchstart", "a#na", function(e) {
        e.preventDefault();
        user_id = $(this).attr("data-user");
        $.ajax({
            type: "POST",
            url: "/matches/" + user_id + "/pass",
            data: { a: 1 },
            success: function(data) {
                $("li#" + user_id).slideToggle();

              potential_match_set_remaining -= 1;

              if(potential_match_set_remaining <= 0){
                get_potential_matches();
              }
            },
            error: function(xhr, status, err) {},
            dataType: "json"
        });
    });
}
