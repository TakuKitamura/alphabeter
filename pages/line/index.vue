<template>
  <v-app>
    <v-container>
      <v-card color="#5CBBF6">
        <v-toolbar>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>
            <img
              alt="ibm-logo"
              :src="require('assets/ibm_logo.svg').default"
              width="100%"
              style="float: left;"
            />
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-card color="#1867C0"
            ><v-card-title class="white--text pl-6">
              <h2>LINE公式アカウント<br />登場!</h2>
            </v-card-title>
            <v-card-text class="white--text pl-6">
              <h3>友達登録すると<br /><b>無料</b>でスタンプがもらえます!</h3>
            </v-card-text>
          </v-card>
          <br />
          <v-card>
            <v-card-title>
              <div>
                <img
                  alt="line"
                  :src="require('assets/line.jpg').default"
                  width="20%"
                  style="float: left;"
                />
                友達登録すると
                <b>無料</b>でスタンプがもらえます!
              </div>
              <div>
                <img
                  alt="line"
                  :src="require('assets/qr.png').default"
                  width="20%"
                  style="float: left;"
                />
                QRコードから, もしくは<br />
                ここから<a href="https://line.me/R/ti/p/%40709lyvui">友達登録</a
                >しよう!
              </div>
              <div>
                <img
                  alt="line"
                  :src="require('assets/stamp.jpg').default"
                  width="100%"
                />
              </div>
              <h2>無料スタンプ(一例...)</h2>
            </v-card-title>

            <!-- <v-card-actions>
              <v-btn large="true" color="white" @click="start()"
                >はじめる
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
