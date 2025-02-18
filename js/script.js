google.load("visualization", "1", {packages:["geochart"]});
google.setOnLoadCallback(onGoogleLoaded);

function onGoogleLoaded() {

  var SITE_URL = 'https://micalinalina.github.io/albums-availability';

  var ALL_MARKETS = {    "AD": "COUNTRY",
    "AE": "COUNTRY",
    "AG": "COUNTRY",
    "AL": "COUNTRY",
    "AM": "COUNTRY",
    "AO": "COUNTRY",
    "AR": "COUNTRY",
    "AT": "COUNTRY",
    "AU": "COUNTRY",
    "AZ": "COUNTRY",
    "BA": "COUNTRY",
    "BB": "COUNTRY",
    "BD": "COUNTRY",
    "BE": "COUNTRY",
    "BF": "COUNTRY",
    "BG": "COUNTRY",
    "BH": "COUNTRY",
    "BI": "COUNTRY",
    "BJ": "COUNTRY",
    "BN": "COUNTRY",
    "BO": "COUNTRY",
    "BR": "COUNTRY",
    "BS": "COUNTRY",
    "BT": "COUNTRY",
    "BW": "COUNTRY",
    "BY": "COUNTRY",
    "BZ": "COUNTRY",
    "CA": "COUNTRY",
    "CD": "COUNTRY",
    "CG": "COUNTRY",
    "CH": "COUNTRY",
    "CI": "COUNTRY",
    "CL": "COUNTRY",
    "CM": "COUNTRY",
    "CO": "COUNTRY",
    "CR": "COUNTRY",
    "CV": "COUNTRY",
    "CW": "COUNTRY",
    "CY": "COUNTRY",
    "CZ": "COUNTRY",
    "DE": "COUNTRY",
    "DJ": "COUNTRY",
    "DK": "COUNTRY",
    "DM": "COUNTRY",
    "DO": "COUNTRY",
    "DZ": "COUNTRY",
    "EC": "COUNTRY",
    "EE": "COUNTRY",
    "EG": "COUNTRY",
    "ES": "COUNTRY",
    "ET": "COUNTRY",
    "FI": "COUNTRY",
    "FJ": "COUNTRY",
    "FM": "COUNTRY",
    "FR": "COUNTRY",
    "GA": "COUNTRY",
    "GB": "COUNTRY",
    "GD": "COUNTRY",
    "GE": "COUNTRY",
    "GH": "COUNTRY",
    "GM": "COUNTRY",
    "GN": "COUNTRY",
    "GQ": "COUNTRY",
    "GR": "COUNTRY",
    "GT": "COUNTRY",
    "GW": "COUNTRY",
    "GY": "COUNTRY",
    "HK": "COUNTRY",
    "HN": "COUNTRY",
    "HR": "COUNTRY",
    "HT": "COUNTRY",
    "HU": "COUNTRY",
    "ID": "COUNTRY",
    "IE": "COUNTRY",
    "IL": "COUNTRY",
    "IN": "COUNTRY",
    "IQ": "COUNTRY",
    "IS": "COUNTRY",
    "IT": "COUNTRY",
    "JM": "COUNTRY",
    "JO": "COUNTRY",
    "JP": "COUNTRY",
    "KE": "COUNTRY",
    "KG": "COUNTRY",
    "KH": "COUNTRY",
    "KI": "COUNTRY",
    "KM": "COUNTRY",
    "KN": "COUNTRY",
    "KR": "COUNTRY",
    "KW": "COUNTRY",
    "KZ": "COUNTRY",
    "LA": "COUNTRY",
    "LB": "COUNTRY",
    "LC": "COUNTRY",
    "LI": "COUNTRY",
    "LK": "COUNTRY",
    "LR": "COUNTRY",
    "LS": "COUNTRY",
    "LT": "COUNTRY",
    "LU": "COUNTRY",
    "LV": "COUNTRY",
    "LY": "COUNTRY",
    "MA": "COUNTRY",
    "MC": "COUNTRY",
    "MD": "COUNTRY",
    "ME": "COUNTRY",
    "MG": "COUNTRY",
    "MH": "COUNTRY",
    "MK": "COUNTRY",
    "ML": "COUNTRY",
    "MN": "COUNTRY",
    "MO": "COUNTRY",
    "MR": "COUNTRY",
    "MT": "COUNTRY",
    "MU": "COUNTRY",
    "MV": "COUNTRY",
    "MW": "COUNTRY",
    "MX": "COUNTRY",
    "MY": "COUNTRY",
    "MZ": "COUNTRY",
    "NA": "COUNTRY",
    "NE": "COUNTRY",
    "NG": "COUNTRY",
    "NI": "COUNTRY",
    "NL": "COUNTRY",
    "NO": "COUNTRY",
    "NP": "COUNTRY",
    "NR": "COUNTRY",
    "NZ": "COUNTRY",
    "OM": "COUNTRY",
    "PA": "COUNTRY",
    "PE": "COUNTRY",
    "PG": "COUNTRY",
    "PH": "COUNTRY",
    "PK": "COUNTRY",
    "PL": "COUNTRY",
    "PS": "COUNTRY",
    "PT": "COUNTRY",
    "PW": "COUNTRY",
    "PY": "COUNTRY",
    "QA": "COUNTRY",
    "RO": "COUNTRY",
    "RS": "COUNTRY",
    "RW": "COUNTRY",
    "SA": "COUNTRY",
    "SB": "COUNTRY",
    "SC": "COUNTRY",
    "SE": "COUNTRY",
    "SG": "COUNTRY",
    "SI": "COUNTRY",
    "SK": "COUNTRY",
    "SL": "COUNTRY",
    "SM": "COUNTRY",
    "SN": "COUNTRY",
    "SR": "COUNTRY",
    "ST": "COUNTRY",
    "SV": "COUNTRY",
    "SZ": "COUNTRY",
    "TD": "COUNTRY",
    "TG": "COUNTRY",
    "TH": "COUNTRY",
    "TJ": "COUNTRY",
    "TL": "COUNTRY",
    "TN": "COUNTRY",
    "TO": "COUNTRY",
    "TR": "COUNTRY",
    "TT": "COUNTRY",
    "TV": "COUNTRY",
    "TW": "COUNTRY",
    "TZ": "COUNTRY",
    "UA": "COUNTRY",
    "UG": "COUNTRY",
    "US": "COUNTRY",
    "UY": "COUNTRY",
    "UZ": "COUNTRY",
    "VC": "COUNTRY",
    "VE": "COUNTRY",
    "VN": "COUNTRY",
    "VU": "COUNTRY",
    "WS": "COUNTRY",
    "XK": "COUNTRY",
    "ZA": "COUNTRY",
    "ZM": "COUNTRY",
    "ZW": "COUNTRY"
  };
  var SPOTIFY_API = 'https://api.spotify.com/v1';

  var HIGHLIGHT_TIMEOUT = 100;

  var chart;
  
  var chartContainer = document.querySelector('#regions-map');
  var searchForm = document.querySelector('#search-form');
  var albumInfoBig = document.querySelector('#data-info');
  var infoContainer = document.querySelector('#regions-info');
  var exactSearchButton = document.querySelector('#exact-search-button');
  var loginButton = document.querySelector('#login-button');

  var albumInfoBigTemplate = document.querySelector('#template-album-info-big').innerHTML;
  var albumNotAvailableTemplate = document.querySelector('#template-album-not-available').innerHTML;
  var albumNotFoundTemplate = document.querySelector('#template-album-not-found').innerHTML;

  document.body.addEventListener('drop', handleDrop, false);
  document.body.addEventListener('dragover', handleDragOver, false);

  var timeoutHandler;
  infoContainer.addEventListener('mouseover', handleMouseover);
  infoContainer.addEventListener('mouseout', handleMouseout);

  loginButton.addEventListener('click', authenticate);

  exactSearchButton.checked = !Config.getExactSearch();
  exactSearchButton.addEventListener('change', handleExactChange);
  searchForm.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    var searchValue = evt.target[0].value;
    var uri = parseUri(searchValue);
    validateAndPerformSearch(uri);
  }

  function handleExactChange(evt) {
    Config.setExactSearch(!evt.target.checked);
    var lastSearch = Config.getLastSearch();
    if (lastSearch) {
      performSearch(lastSearch);
    }
  }

  function handleMouseover(evt) {
    clearTimeout(timeoutHandler);
    var self = this;
    timeoutHandler = setTimeout(function() {
      var path = evt.path;
      var current = self.dataset.active;
      for(var i = 0; i < path.length; i++) {
        if (path[i].dataset && path[i].dataset.albumid) {
          if (path[i].dataset.albumid != current) {
            current = path[i].dataset.albumid;
            self.dataset.active = current;
            highlight(current);
          }
          return;
        }
      }
      highlight(null);
      self.active = null;
    }, HIGHLIGHT_TIMEOUT);
  }

  function handleMouseout(evt) {
    clearTimeout(timeoutHandler);
    var self = this;
    timeoutHandler = setTimeout(function() {
      self.dataset.active = null;
      highlight(null);
    }, HIGHLIGHT_TIMEOUT);
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  function handleDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var url = evt.dataTransfer.getData('text/plain');
    if (!url) return;
    if (url.indexOf('open.spotify.com') > -1) {
      var parsed = parseUri(url.replace(/https?:\/\/open.spotify.com\//, 'spotify/'), '/');
    } else {
      var parsed = parseUri(url);
    }

    validateAndPerformSearch(parsed);

    return false;
  }

  function parseUri(uri, delimiter) {
    var segments = uri.split(delimiter || ':');
    var id, type;
    if (segments[1] === 'user') {
      type = segments[3];
      id = segments[2] + ':' + segments[4];
    } else if (segments[1] === 'album') {
      type = segments[1];
      id = segments[2];
    }
    return {type: type, id: id};
  }

  function validateAndPerformSearch(parsedUri) {

    if (parsedUri.type == 'album') {
      document.body.classList.remove('invalid-search');
      performSearch(parsedUri.id);
    } else {
      document.body.classList.add('invalid-search');
      clearChart();
    }
  }

  function clearChart() {
    drawChart([]);
    albumInfoBig.innerHTML = '';
    infoContainer.innerHTML = '';
  }

  function performSearch(id) {
    Config.setLastSearch(id);
    infoContainer.innerHTML = '';

    SpotifyApi.sendRequest(SPOTIFY_API + '/albums/' + id, function(error, album) {

      if (error && error == 'unauthorised') {
        document.body.classList.add('no-token');
        clearChart();
        return;
      }

      fillInfo(album);

      function albumsCallback(result, next) {
        if (next) {
          getAlbums(next, album.name, albumsCallback, result);
        } else {
          fillInfoData(result, album);
          fillChartData(result);
        }
      }

      var uri = SPOTIFY_API + '/artists/' + album.artists[0].id + '/albums?album_type=' + album.album_type;

      var markets = [];
      var ids = [];
      var count = {};
      if (album.available_markets.length) {
        markets.push(album.available_markets);
        ids.push(album.id);
        album.available_markets.forEach(function(market) {
          count[market] = 1;
        });
      }

      getAlbums(uri, album.name, albumsCallback, { markets: markets, ids: ids, count: count });
    });
  }

  function getAlbums(uri, albumName, callback, result) {
    SpotifyApi.sendRequest(uri, function(error, albums) {
      albums.items.forEach(function(el) {
        var elName = el.name.toLowerCase().replace(/[,.;:?!"]/g, '');
        var alName = albumName.toLowerCase().replace(/[,.;:?!"]/g, '');
        var condition = Config.getExactSearch() ?
        el.name == alName : elName.indexOf(alName) == 0 || alName.indexOf(elName) == 0
        if (condition && result.ids.indexOf(el.id) == -1) {
          result.ids.push(el.id);
          result.markets.push(el.available_markets || []);
          if (el.available_markets) {
            el.available_markets.forEach(function(market) {
              result.count[market] = result.count[market] || 0;
              result.count[market]++;
            });
          }
        }
      });

      callback(result, albums.next);
    });
  }

  function fillInfo(info) {
    var data = {
      albumTitle: info.name,
      albumType: info.album_type,
      artistName: info.artists.map(function(el) { return el.name; }).join(', ')
    }
    var rendered = Mustache.render(albumInfoBigTemplate, data);
    albumInfoBig.innerHTML = rendered;
  }

  var currentDataset;

  function highlight(id) {
    if (currentDataset) {
      var markets = [];
      var dataset = currentDataset.map(function(el) {
        var row = el.slice(0);
        row.spid = el.spid;
        if (row.spid && row.spid == id) {
          markets.push(row[0])
          row[1] = 0.5;
        }
        return row;
      });
      drawChart(dataset.filter(function(el) {
        return markets.indexOf(el[0]) == -1 || el.spid == id;
      }));
    }
  }

  function getAlbumInfo(name, albums, id) {
    var fragment = document.createDocumentFragment();
    var title = document.createElement('h3');
    title.classList.add("row");
    title.classList.add("album-title");
    title.innerHTML = name;

    fragment.appendChild(title);
    
    albums.forEach(function(album) {
      var div = document.createElement('div');
      div.dataset.albumid = album.id;
      div.classList.add("album-info");
      div.classList.add("row");

      if (album.id == id) {
        div.classList.add("searched");
      }

      var explicit = false;
      for(var i = 0; i < album.tracks.items.length; i++) {
        if (album.tracks.items[i].explicit) {
          explicit = true;
          break;
        }
      }

      var copyrights = d3.map(album.copyrights, function(d) { return d.type });
      
      var html = '';
      html += '<a href="https://open.spotify.com/album/' + album.id + '">'
      html += '<img class="cover" src="' + album.images[2].url + '" alt="" />';
      html += '</a>';
      html += '<ul>';
      html += '<li><a href="https://open.spotify.com/album/' + album.id + '">';
      html += album.tracks.items.length + ' tracks on ' + album.tracks.items.pop().disc_number + ' discs';
      html += '</a></li>';
      html += '<li>' + album.album_type + ' &bull; ';
      html += album.release_date + '</li>';
      if (explicit) {
        html += '<li><span class="explicit">Explicit</span>&nbsp;</li>';
      }
      html += '</ul>';
      html += '<p>' + album.available_markets.map(function(el) {
        return '<span title="' + ALL_MARKETS[el] + '">' + el + '</span>';
      }).join(' ') + '</p>';
      html += '<p class="uri"><a href="https://api.spotify.com/v1/albums/' + album.id + '">' + album.uri+ '</a></p>';
      if (copyrights.get('C')) {
        html += '<p class="copyrights">&copy; ' + copyrights.get('C').text; + '</p>';
      }
      if (copyrights.get('P')) {
        html += '<p class="copyrights">&#8471; ' + copyrights.get('P').text + '</p>';
      }
      div.innerHTML = html;

      fragment.appendChild(div);
    });
    return fragment;
  }

  function fillInfoData(result, album) {
    var ids = result.ids;
    if (ids.length) {
      SpotifyApi.sendRequest(SPOTIFY_API + '/albums?ids=' + ids, function(error, albums) {
        console.log("Full found albums", albums.albums);
        var nest = d3.nest()
        .key(function(d) { return d.name; })
        .sortKeys(function(a, b) {
          return a == album.name ? 1 : -1;
        })
        .sortValues(function(a, b){
          return a.id == album.id ? -1 : 1;
        })
        .entries(albums.albums);

        nest.forEach(function(el) {
          infoContainer.insertBefore(getAlbumInfo(el.key, el.values, album.id), infoContainer.firstChild);
        });

        if(!infoContainer.querySelector(".searched")) {
          exactMatchNotFound(album);
        }
      });
    } else {
      exactMatchNotFound(album);
    }
  }

  function exactMatchNotFound(album) {
    var html = Mustache.render(albumNotFoundTemplate, {
      albumApiLink: album.href,
      albumUri: album.uri
    })
    infoContainer.innerHTML = html + infoContainer.innerHTML;
  }

  function fillChartData(result) {
    var marketsList = result.markets;
    var ids = result.ids;
    var data = [];
    var allMarkets = Object.keys(ALL_MARKETS);

    marketsList.forEach(function(markets, i) {
      markets.forEach(function(market) {
        var index = allMarkets.indexOf(market);
        if (index > -1) {
          allMarkets.splice(allMarkets.indexOf(market), 1);
        }

        var name = market;
        if (ALL_MARKETS[market]) {
          name = ALL_MARKETS[market];
        } else {
          console.log('Not in available markets', market);
        }

        var el = [name, result.count[market], result.count[market] + ' versions available'];
        el.spid = ids[i];
        data.push(el);
      });
    });

    if (allMarkets.length) {
      console.log("Not available in: " + allMarkets);
      var html = Mustache.render(albumNotAvailableTemplate, {
        markets: allMarkets.map(function(el) {
          return { code: el, name: ALL_MARKETS[el]}
        })
      });
      infoContainer.innerHTML += html;
    }

    allMarkets.forEach(function(market) {
      data.push([ALL_MARKETS[market], 0, 'Not available']);
    });

    console.log("Chart data", data);
    currentDataset = data;
    drawChart(data);
  }

  function drawChart(markets) {
    var chartData = new google.visualization.DataTable();
    chartData.addColumn('string', 'Country');
    chartData.addColumn('number', 'Available');
    chartData.addColumn({type: 'string', role: 'tooltip'});
    chartData.addRows(markets);

    var max = d3.max(markets, function(el) { return el[1] }) || 1;

    if (max < 1) max = 1;

    var options = {
      backgroundColor: 'transparent',
      datalessRegionColor: '#2e2f33',
      keepAspectRatio: true,
      colorAxis: {
        minValue: 0,
        colors: ['#8f2600', '#bdaa00', '#4B6601', '#B4D612'],
        values: [0, 0.5, 1, max]
      },
      legend: 'none',
      tooltip: {
        showColorCode: false
      },
      enableRegionInteractivity: true,
      animation: {
        duration: 1000,
        easing: 'out',
      }
    };

    chart.draw(chartData, options);
  }

  function authenticate() {
    var authUrl = Auth.getAuthUrl(SITE_URL);
    window.location = authUrl;
  }

  if (location.search.indexOf('auth_callback') > 0) {
    Auth.parseResponse(location);
    window.location = SITE_URL;
    return;
  }

  chart = new google.visualization.GeoChart(chartContainer);

  performSearch(Config.getLastSearch() || "5crKH3Brm4wjPOsgpEqkcU");
}
