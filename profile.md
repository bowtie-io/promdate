---
layout: account
title: Edit Profile
permalink: /profile/
exclude_from_nav: true

---
<script type="text/javascript">
bowtie.user.info(function(user){
  if(!user){
    window.location.replace("/users/sign_in");
  }
});
</script>

<!-- TESTER -->
<div id="edit_tester_profile">
  <div id="profile" class="user-profile">

    <div class="row">
      <div class="col-xs-4 plan-tester">
        <img src='/img/avatar.gif' class='img-circle avatar'>
      </div>
      <div class="col-xs-4 plan-startup plan-startup---pro">
        <img src='/img/avatar2.gif' class='img-circle avatar'>
      </div>
      <div class="col-xs-8">
        <form class="form-inline" role="form">
          <div class="form-group">
            <label for="exampleInputFile">Profile Pic</label>
            <input type="file" id="exampleInputFile">
            <p class="help-block">Select a new img (1MB Max) </p>
          </div>
        </form>
      </div>
    </div>
    <br />

    <br />

    <div class='form-group'>
      <div class="field-box">
        <label>Tags:</label>
        <small class="pull-right edit_startup_profile"> (Select desired Tester skills)</small>
        <small class="pull-right edit_tester_profile plan-startup plan-startup---pro"> (Select as many as you want)</small>
      <div class="panel">
        <ul id="profile-tags">
        <li class="label inactive">Frontend</li>
        <li class="label inactive">Backend</li>
        <li class="label inactive">Full-stack</li>
        <li class="label inactive">UX design</li>
        <li class="label inactive">UI design</li>
        <li class="label inactive">Mobile Dev</li>
        <li class="label inactive">Student</li>
        <li class="label inactive">DevOps</li>
        <li class="label inactive">Copywriter</li>
        <li class="label inactive">Branding</li>
        <li class="label inactive">Marketer</li>
        <li class="label inactive">Biz Dev</li>
        <li class="label inactive">Investor</li>
        </ul>
      </div>
      </div>
    </div>

    <br>

    <div class='form-group'>
      <div class="field-box">
        <label>Info:</label>
        <small class="pull-right edit_startup_profile"> (Elevator pitch, link to project, etc)</small>
        <small class="pull-right edit_tester_profile plan-startup plan-startup---pro"> (sell yourself, include profile links, etc.)</small>
        <textarea class="form-control" id="user_info" rows="4"></textarea>
      </div>
    </div>

    <br>

      <form class="form-horizontal" role="form">
      <div class="form-group row">
        <label class="col-xs-2" for="email">Name:</label>
        <div class="col-xs-8">
          <input type="email" class="form-control disabled" id="user_name" placeholder="user name" disabled>
        </div>
        <div class="col-xs-2">
          <a class="btn-sm btn btn-primary" href="/users/edit">Edit</a>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xs-2" for="email">Email:</label>
        <div class="col-xs-8">
          <input type="email" class="form-control disabled" id="user_email" placeholder="user email" disabled>
        </div>
        <div class="col-xs-2">
          <a class="btn-sm btn btn-primary" href="/users/edit">Edit</a>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xs-2" for="email">Pswd:</label>
        <div class="col-xs-8">
          <input type="email" class="form-control disabled" id="email" placeholder="********" disabled>
        </div>
        <div class="col-xs-2">
          <a class="btn-sm btn btn-primary" href="/users/edit">Edit</a>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-xs-2" for="email">Plan:</label>
        <div class="col-xs-8">
          <input type="email" class="form-control" id="user_plan" placeholder="User Plan Name" disabled>
        </div>
        <div class="col-xs-2">
          <a class="btn-sm btn btn-primary" href="/users/plan">Edit</a>
        </div>
      </div>
    </form>
    <br />
    <div class='form-actions'>
    <input id="update_profile" class="button btn btn-default" name="commit" type="submit" value="Save" />
    </div>

  </div>
</div>



<script type="text/javascript">

bowtie.user.info(function(user){
  if(!user){
    // There is no user signed in
  }else{

    if(user.plan_id == "Tester"){
      $(".edit_tester_profile").show();
      $(".edit_startup_profile").hide();

    }else{
      $(".edit_startup_profile").show();
      $(".edit_tester_profile").hide();
    }

    $("#user_name").val(user.name);
    $("#user_email").val(user.email);
    $("#user_plan").val(user.plan_id);


    var promDate = new dmProject("pr_Tl1Eehzg", user);
    promDate.edit_profile();




  }
});
