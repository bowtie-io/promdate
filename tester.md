---
layout: login
title: Register
permalink: /tester/
---

## Register Tester Step 2
All the things for the user profile here

<div class='form-group'>
  <form accept-charset="UTF-8" action="/users" class="simple_form new_user" id="new_user" method="post"><div style="display:none"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FJ7OBAN1qFFlPVrZ6kAHUbtZMxnzri+HU5ffxAAdJJw=" /></div>
    <div class="input hidden user_stripe_credit_card_token"><input class="hidden" id="user_stripe_credit_card_token" name="user[stripe_credit_card_token]" type="hidden" /></div>
    <div class='form-inputs'>
      <div class='form-group'>
      <div class="input string required user_name"><label class="string required" for="user_name"><abbr title="required">*</abbr> Name</label><input aria-required="true" autofocus="autofocus" class="string required form-control" id="user_name" maxlength="255" name="user[name]" placeholder="Name" required="required" size="255" type="text" /></div>
      </div>

      <div class='form-group'>
      <div class="input email required user_email"><label class="email required" for="user_email"><abbr title="required">*</abbr> Email</label><input aria-required="true" class="string email required form-control" id="user_email" maxlength="255" name="user[email]" placeholder="Email" required="required" size="255" type="email" value="" /></div>
      </div>

      <div class='form-group'>
      <div class="input password required user_password"><label class="password required" for="user_password"><abbr title="required">*</abbr> Password</label><input aria-required="true" class="password required form-control" id="user_password" maxlength="50" name="user[password]" placeholder="8 char. minimum" required="required" size="50" type="password" /></div>
      </div>

      <div class='form-group'>
      <div class="input password required user_password_confirmation"><label class="password required" for="user_password_confirmation"><abbr title="required">*</abbr> Password confirmation</label><input aria-required="true" class="password required form-control" id="user_password_confirmation" name="user[password_confirmation]" required="required" type="password" /></div>
      </div>
    </div>
    <br>
    <div class='form-actions'>
    <input class="button btn btn-default" name="commit" type="submit" value="Match!" />
    </div>
  </form>
</div>
