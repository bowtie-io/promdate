---
layout: default
title: Matches
permalink: /matches/

---


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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



<div class="row">
  <div class="pull-left">
  <div id="match-count" class="btn-circle-sm">
    <span id="match_number">0</span>
    <p>Matches</p>
  </div>
  </div>

  <div class="pull-right">
  <div style="text-align:center; font-size:1.4em; margin:15px;">
    <a href="#" class="export_link btn btn-success">Export List</a>
  </div>
  </div>
</div>

<h1 class="post-title">Matches</h1>

Your matches are displayed below. Email addresses become visible and can be exported if you upgrade.

<div class="actuals matches-table" style="display:none;">
    <ul id="actual_matches">
      <li class='"+value+" panel text-left'>
        <div class="row">
          <div class="col-xs-3">
            <img src='/img/avatar.gif' class='img-circle avatar'>
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
          <a href="#" class="export_link">c***@example.com</a>
          </div>

        </div>
      </li>
    </ul>
</div>


<script type="text/javascript">
    bowtie.user.info(function(user){
      if(user){
        $('.signed-in').show();

        var promDate = new dmProject("pr_Tl1Eehzg", user);
        promDate.get_actual_matches();

      }else{
        $('.signed-out').show();
      }
    });
</script>
