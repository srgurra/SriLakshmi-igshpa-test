$('.btn').click(function() {
  
  /**
   * Write your code here
   */
  $.getJSON('https://qrcode.igshpa.org/api-status', function(json) {
        const started = json.started;
        const uptime = json.uptime;
        const currentTime = new Date(
            (Math.floor(Date.parse(started) / 1000) + uptime) * 1000
        ).toISOString();

        $('.panel-body').append(
            '<div class="row"><div class="col-md-4">' +
                started +
                '</div><div class="col-md-4">' +
                uptime +
                '</div><div class="col-md-4">' +
                currentTime +
                '</div></div>'
        );
    });
});