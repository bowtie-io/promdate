---
layout: default
title: Matches
permalink: /matches/

---
<!-- Upgrade Modal -->
<div class="modal fade" id="upgrade" tabindex="-1" role="dialog" aria-labelledby="#" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h4 id="myModalLabel">Only 'Pro' users can view/export email addresses... you need to upgrade first.</h4>
      </div>
      <div class="modal-footer">
        <a type="button" class="btn btn-primary" href="/users/plan">Upgrade</a>
      </div>
    </div>
  </div>
</div>

<!-- Export Modal -->
<div class="plan-startup---pro modal fade" id="export" tabindex="-1" role="dialog" aria-labelledby="#" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <h4 id="myModalLabel">Thanks for using Prom Date! Click the button below to download a .CSV of your current matches.</h4>
      </div>
      <div class="modal-footer">
        <a type="button" class="btn btn-primary" href="/export/matches.csv">Download CSV</a>
      </div>
    </div>
  </div>
</div>


<div class="signed-in" style="display:none;">
<div id="main" class="row">
  <div class="pull-left">
  <div id="match-count" class="btn-circle-sm">
    <span id="match_number">0</span>
    <p>Matches</p>
  </div>
  </div>

  <div class="pull-right plan-startup---pro plan-tester">
    <div style="text-align:center; font-size:1.4em; margin:15px;">
      <a href="#" class="btn btn-success" data-toggle="modal" data-target="#export">Export List</a>
    </div>
  </div>
  <div class="pull-right plan-startup">
    <div style="text-align:center; font-size:1.4em; margin:15px;">
      <a href="#" class="btn btn-success" data-toggle="modal" data-target="#upgrade">Export List</a>
    </div>
  </div>
</div>

<h1 class="post-title">Matches</h1>

Your matches are below. Email addresses become visible and can be exported if you upgrade ($3). Get to work!

<div class="actuals matches-table">
    <ul id="actual_matches">

    </ul>
</div>


<div id="match_template" style="display:none;">


<li class='panel text-left'>
  <div class="row">
    <div class="col-xs-3">
      <img src='%avatar%' class='img-circle avatar'>
    </div>
    <h3 class="text-center col-xs-9">%name%</h3>
  </div>
  <br />
  <div class="row">
    <div class="col-xs-12">
      <ul>
        %tags%
      </ul>
    </div>
  </div>
  <div class="info_block email">
    <h4>Email:</h4>
    <p><a href="#">%email%</a></p>
  </div>

  <div class="info_block">
    <span class="close">x</span>
    <h4>Details:</h4>
    <p>%info%</p>
  </div>
</li>

</div>


<script type="text/javascript">
  bowtie.user.info(function(user){
    if(!user){ return; }

    if(user){
      $('.signed-in').show();
      var promDate = new dmProject("pr_Tl1Eehzg", user);
      promDate.get_actual_matches();


    }
  });
</script>
