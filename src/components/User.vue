<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="header">
            <h4 class="title">Jumlah Dosen</h4>
          </div>
          <div class="content">
            <div class="media">
              <div class="media-left">
                <i class="material-icons md-48 media-object">face</i>
              </div>
              <div class="media-body">
                <h2 class="media-heading text-right">2014</h2>
              </div>
            </div>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="header">
            <h4 class="title">Jumlah Dosen</h4>
          </div>
          <div class="content">
            <div class="media">
              <div class="media-left">
                <i class="material-icons md-48 media-object">face</i>
              </div>
              <div class="media-body">
                <h2 class="media-heading text-right">2014</h2>
              </div>
            </div>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="header">
            <h4 class="title">Jumlah Dosen</h4>
          </div>
          <div class="content">
            <div class="media">
              <div class="media-left">
                <i class="material-icons md-48 media-object">face</i>
              </div>
              <div class="media-body">
                <h2 class="media-heading text-right">2014</h2>
              </div>
            </div>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="header">
            <h4 class="title">Jumlah Dosen</h4>
          </div>
          <div class="content">
            <div class="media">
              <div class="media-left">
                <i class="material-icons md-48 media-object">face</i>
              </div>
              <div class="media-body">
                <h2 class="media-heading text-right">2014</h2>
              </div>
            </div>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <div class="left-header">
              <h4 class="title">Statistik Dosen</h4>
              <p class="category">Last Campaign Performance</p>
            </div>
            <div class="right-header">
              <input type="text" class="form-control" placeholder="Cari....">
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="content table-responsive table-full-width">
            <table class="table table-hover table-striped">
              <thead>
                <th>Nama</th>
                <th>NIP</th>
                <th>Pembimbing</th>
                <th>Penguji</th>
                <th>Total</th>
              </thead>
              <tbody>
                <tr>
                  <td>Andriani Kusumawati, S.Sos, M.Si , DBA</td>
                  <td>19760414 200212 2 002</td>
                  <td>1</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Arik Prasetya, S.Sos, M.Si.,Ph.D</td>
                  <td>19760414 200212 2 002</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Dr. Djamhur Hamid, Dip.Bus, M.Si</td>
                  <td>19760414 200212 2 002</td>
                  <td>1</td>
                  <td>12</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Dr. Hamidah Nayati Utami, M.Si</td>
                  <td>19760414 200212 2 002</td>
                  <td>12</td>
                  <td>12</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Dr. Hamidah Nayati Utami, M.Si</td>
                  <td>19760414 200212 2 002</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="header">
            <h4 class="title">Diagram Judul Penelitian Tesis</h4>
            <p class="category">Berdasrkan tipe penelitian</p>
          </div>
          <div class="content">
            <canvas id="ChartTipePenelitian" width="400" height="400"></canvas>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="header">
            <h4 class="title">Diagram Progress Mahasiswa</h4>
            <p class="category">Berdasrkan tipe penelitian</p>
          </div>
          <div class="content">
            <canvas id="ChartProgressMhs" width="400" height="400"></canvas>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'User',
  mounted: function () {
    var ChartTipePenelitian = document.getElementById('ChartTipePenelitian')
    new Chart(ChartTipePenelitian, { // eslint-disable-line no-new
      type: 'pie',
      data: {
        labels: ['Pemasaran', 'Keuangan', 'Manajemen Sumber Daya Manusia', 'Sistem Informasi Manajemen', 'Pariwisata'],
        datasets: [{
          label: '# Bidang minat Tesis',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'tes title'
        },
        legend: {
          position: 'bottom'
        },
        animation: {
          animateRotate: true
        }
      }
    })
    var ChartProgressMhs = document.getElementById('ChartProgressMhs')
    new Chart(ChartProgressMhs, { // eslint-disable-line no-new
      type: 'bar',
      data: {
        labels: ['Ujian Proposal', 'Seminar Hasil', 'Ujian Akhir'],
        datasets: [{
          label: 'Progress Mahasiswa',
          data: [5, 7, 6],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'tes title'
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 10,
              min: 0,
              stepSize: 2
            }
          }]
        }
      }
    })
  }
}
</script>

<style lang="css">
</style>
