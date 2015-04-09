---
layout: default
title: Matches
permalink: /matches/

---

<div class="row">
  <div class="col-xs-8">
  Match count here
  </div>

  <div class="col-xs-4">
  <div style="text-align:center; font-size:1.4em; margin:15px;">
    <a href="#" class="matched_link btn btn-success">Export List</a>
  </div>
  </div>
</div>

# Matches

Matched profiles go here - email addresses are not visible unless paid, export button will dump csv if paid OR redirect to upgrade plan page based on the yaml file in this directory

<div class="actuals matches-table" style="display: ;">
    <ul id="actual_matches">
      <li class='"+value+" panel text-left'>
        <div class="row">
          <div class="col-xs-3">
            <img src='/img/chad-person.jpg' class='img-circle avatar'>
          </div>
          <h3 class="text-center col-xs-9">"+details.user.name+" </h3>
        </div>

        <div class="row">
          <div class="col-xs-9">
            <ul>
              <li class="label label-warning">tag 1</li>
              <li class="label label-warning">tag2</li>
              <li class="label label-warning">tag3</li>
            </ul>
          </div>
          <div class="row btn-group match-btn col-xs-3">
            <a href='#' id='info' class='"+value+" btn-circle-sm'> <i class="fa fa-info fa-2x"></i></a>
          </div>
        </div>
        <div class="row">
          <h4 class="col-xs-3">Email:</h4>
          <div class="col-xs-9">
          chad@example.com
          </div>

        </div>
      </li>
    </ul>
</div>
