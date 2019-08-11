<template>
  <div class="content">
    <BigCard style="margin-top: 6rem;">
      <h3>SMART ARCHIVE</h3>
      <div>
        <img src="@/assets/smart-safa.jpg" alt="smart safa" />
      </div>

      <ul>
        <li>View grouping of documents</li>
        <li>View documents in a group</li>
        <li>Display single-page documents</li>
        <li>View attachments of a document</li>
        <li>Display documents face-to-face</li>
        <li>View documents graphically</li>
        <li>Search types and filters on users</li>
        <li>Operating performance report</li>
        <li>Tracking User Operations</li>
        <li>Report actions taken by users</li>
        <li>Provides a variety of user performance reports</li>
        <li>Access information via serial number</li>
      </ul>
    </BigCard>
    <BigCard>
      <h3>SAFA MOBILE MAPPING SYSTEM</h3>
      <div>
        <img src="@/assets/mobile-mapping.jpg" alt="mobile-mapping" />
      </div>
      <ul>
        <li>Removal</li>
        <li>Processing</li>
        <li>Analysis</li>
        <li>Identify complications</li>
        <li>Extract layers</li>
        <li>the show</li>
      </ul>
    </BigCard>
    <BigCard>
      <h3>SAFA SDI</h3>
      <div>
        <img src="@/assets/safa-sdi.jpg" alt="safa-sdi" />
      </div>
      <ul>
        <li>Applying up-to-date global standards in data catalogs based on PCFGs and ISO19115 approvals</li>
        <li>Publish data in accordance with world-known standards WMS, WFS and TMS</li>
        <li>Ability to define user accounts with different levels of access for users using the User Management System</li>
        <li>Ability to create different user levels for users to safely use map data</li>
        <li>Ability to define WMS, WFS and TMS to the level of access of users using related services</li>
        <li>Ability to import and export layers with Shape and SDF file formats to GeoDatabase</li>
      </ul>
    </BigCard>
    <BigCard>
      <h3>SAFA CONTROL MAPPING</h3>
      <div>
        <img src="@/assets/safa-map-control.jpg" alt="safa-map-control" />
      </div>
      <ul>
        <li>Ability to draw and edit map contents and save map contents as XML and DWG in web environment</li>
        <li>Automatic analysis and computation of architectural and computational maps with the ability to report objects in a plan</li>
        <li>Ability to display DWG files in the web environment without any special display or software dependencies</li>
        <li>Zoom in, zoom out, move and move the map and measure the objects on it and change the color of the layers</li>
        <li>Manage layers on the map, display layer names, turn them on and off and adjust their properties</li>
        <li>Ability to define different access levels for files on the data center for users on the system</li>
        <li>Ability to share drawing files for different users with folder creation</li>
        <li>
          Ability to draw lines, dots, polygons, circles, ellipses and bows and display and print maps a
          t different scales
        </li>
      </ul>
    </BigCard>
    <BigCard>
      <div class="naz-mi">
        <h3 class="naz-h">M.H.NAZEMI</h3>
        <ul class="naz-link">
          <li>
            <a href="https://github.com/penkong/vue-safa" target="_blanck">Vue - Safa - github</a>
          </li>
          <li>
            <a
              href="https://github.com/penkong/vue-node-saf"
              target="_blanck"
            >Vue - Node - Safa - github</a>
          </li>
          <li>
            <a
              href="https://github.com/penkong/nuxt-safa"
              target="_blanck"
            >Vue - Nuxt - Safa - github</a>
          </li>
        </ul>
      </div>
    </BigCard>
  </div>
</template>

<script>
import BigCard from "../../components/BigCard/BigCard";
export default {
  name: "UserLanding",
  components: {
    BigCard
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/abstract/mixins";
@import "../../sass/component/content";
.content {
  h3 {
    font-size: 2rem;
    color: rgb(0, 128, 128);
    padding: 0.75rem;
    margin: 0.5rem auto;
    text-align: center;
    cursor: pointer;
  }
  div {
    width: 80%;
    margin: 1rem auto;

    img {
      margin: 1rem auto;
      cursor: pointer;
      transition: transform 4s ease-out;
      &:hover {
        transform: scale(1.05);
      }
    }
    @include respond(tab-port) {
      width: 90%;
    }
  }
  ul {
    margin-left: 2rem;
    padding: 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      font-size: 1.3rem;
      margin: 0.75rem auto;
      display: inline-block;
      width: 35%;
      margin-left: 2.5rem;
      padding: 0.5rem 1rem 1rem;
      border-bottom: 1px double rgb(0, 128, 128);
      transition: all 0.7s ease;
      &:hover {
        border-bottom: 1px double rgba(0, 161, 161, 0.534);
        border-left: 1px solid rgb(0, 128, 128);
      }
      @include respond(tab-land) {
        width: 45%;
        margin-left: 1.5rem;
      }
      @include respond(phone) {
        font-size: 1.4rem;
        margin-left: 0;
        width: 80%;
      }
      @include respond(sm-phone) {
        width: 90%;
      }
    }
  }
  .naz-mi {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    .naz-h {
      letter-spacing: 4px;
      flex-grow: 1;

      border-radius: 4px;
      color: white;
      background-color: rgb(0, 162, 226);

      padding: 2rem;
      margin: 0 auto;
      text-align: center;
      transition: all 0.5s ease-in;
    }
    .naz-link {
      display: flex;
      flex-grow: 3;
      flex-direction: column;
      li {
        width: 80%;
        color: rgb(0, 129, 161);
        border: 1px solid rgb(0, 129, 161);
        padding: 1rem;
        border-radius: 4px;
        text-align: center;
        transition: all 0.3s ease-out;
        &:hover {
          color: black;
          background-color: rgb(255, 153, 0);
          border: 1px solid rgb(255, 153, 0);
        }
      }
    }
    @include respond(phone) {
      flex-direction: column;
      .naz-link {
        display: block;
        text-align: center;
        width: 60%;
          margin: auto;
        li {
          align-content: space-around;
        }
      }
    }
  }
}
</style>