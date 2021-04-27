<template>
  <div id="wrapper" class="width" style="height: auto !important">
    <div id="header-wrapper">
      <div id="header">
        <div id="header-left">
          <logo-icon class="img"></logo-icon>
          <div id="desc">
            Instantly convert EPUB, MOBI, AZW, FB2 and other ebook formats to
            PDF documents with this free online converter. This service provides
            better quality than many other ebook converters, offers mass
            conversion and allows files up to 50 MB.
          </div>
          <ol>
            <li>
              Click the UPLOAD FILES button and select up to 20 ebook files you
              wish to convert. You can also drag files to the drop area to start
              uploading.
            </li>
            <li>
              Wait for the conversion process to finish and download files
              either one by one, using thumbnails, or in a ZIP archive.
            </li>
          </ol>
          <div id="pls">
            <a id="en" class="current" href="#"
              >English <span class="trigger">»</span></a
            >
            <ul class="dropdown">
              <li><a id="bg" href="/bg/">Български</a></li>
              <li><a id="ca" href="/ca/">Català</a></li>
              <li><a id="cs" href="/cs/">Čeština</a></li>
              <li><a id="da" href="/da/">Dansk</a></li>
              <li><a id="de" href="/de/">Deutsch</a></li>
              <li><a id="el" href="/el/">Ελληνικά</a></li>
              <li><a id="es" href="/es/">Español</a></li>
              <li><a id="et" href="/et/">Eesti</a></li>
              <li><a id="fi" href="/fi/">Suomi</a></li>
              <li><a id="fr" href="/fr/">Français</a></li>
              <li><a id="hi" href="/hi/">हिन्दी</a></li>
              <li><a id="hu" href="/hu/">Magyar</a></li>
              <li><a id="id" href="/id/">Indonesia</a></li>
              <li><a id="it" href="/it/">Italiano</a></li>
              <li><a id="ja" href="/ja/">日本語</a></li>
              <li><a id="ko" href="/ko/">한국어</a></li>
              <li><a id="lt" href="/lt/">Lietuvių</a></li>
              <li><a id="lv" href="/lv/">Latviešu</a></li>
              <li><a id="ms" href="/ms/">Melayu</a></li>
              <li><a id="nb" href="/nb/">Norsk</a></li>
              <li><a id="nl" href="/nl/">Nederlands</a></li>
              <li><a id="pl" href="/pl/">Polski</a></li>
              <li><a id="pt" href="/pt/">Português</a></li>
              <li><a id="ro" href="/ro/">Română</a></li>
              <li><a id="ru" href="/ru/">Русский</a></li>
              <li><a id="sr" href="/sr/">Српски</a></li>
              <li><a id="sv" href="/sv/">Svenska</a></li>
              <li><a id="th" href="/th/">ภาษาไทย</a></li>
              <li><a id="tr" href="/tr/">Türkçe</a></li>
              <li><a id="uk" href="/uk/">Українська</a></li>
              <li><a id="vi" href="/vi/">Tiếng việt</a></li>
              <li><a id="zh" href="/zh/">中文</a></li>
            </ul>
          </div>
        </div>
        <div id="header-right">
          <div id="alter-right">
            <div class="more-tools">
              <h2>Useful Online Tools</h2>
              <ul>
                <li>
                  <div class="more-tools-title">
                    <a href="https://pdftosvg.com">PDF to SVG ⇗</a>
                  </div>
                  <div class="more-tools-text">
                    Convert PDF documents to SVG images.
                  </div>
                </li>
                <li>
                  <div class="more-tools-title">
                    <a href="https://svgoptimizer.com">SVG Optimizer ⇗</a>
                  </div>
                  <div class="more-tools-text">Compress SVG images online.</div>
                </li>
                <li>
                  <div class="more-tools-title">
                    <a href="https://epstosvg.com">EPS to SVG ⇗</a>
                  </div>
                  <div class="more-tools-text">
                    Convert EPS images to SVG format.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <div id="main" style="height: auto !important">
      <div id="upload-buttons-wrapper">
        <div
          id="pick-files"
          class="ui-button-success ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary"
          role="button"
          style="z-index: 1"
        >
        <span class="ui-button-text">Upload Files</span>
        </div>
        <div
          id="reset-all"
          class="ui-button-danger plupload_disabled ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary ui-button-disabled ui-state-disabled"
          role="button"
        >
        <span class="ui-button-text">Clear Queue</span>
        </div>
        <div
          id="html5_1f48mlivt1dlm1mk716f6ssj1jqv4_container"
          class="moxie-shim moxie-shim-html5"
          style="
            position: absolute;
            top: 0px;
            left: 0px;
            width: 145px;
            height: 33px;
            overflow: hidden;
            z-index: 0;
          "
        >
          <input
            id="html5_1f48mlivt1dlm1mk716f6ssj1jqv4"
            type="file"
            style="
              font-size: 999px;
              opacity: 0;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
            "
            multiple
            accept
            tabindex="-1"
          />
        </div>
      </div>
      <div class="clear"></div>

      <div id="carousel-wrapper">
        <div id="carousel-prev-wrapper">
          <div
            id="carousel-prev"
            class="disabled ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-button-disabled ui-state-disabled"
            role="button"
            title
          >
            <span
              class="ui-button-icon-primary ui-icon ui-icon-triangle-1-w"
            ></span
            ><span class="ui-button-text"></span>
          </div>
        </div>
        <div id="container" style="width: 740px; left: 22px">
          <div id="carousel">
            <ul id="filelist" class="plupload_filelist"></ul>
            <div id="plupload_drop">Drop Your Files Here</div>
          </div>
        </div>
        <div id="carousel-next-wrapper">
          <div
            id="carousel-next"
            class="disabled ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-button-disabled ui-state-disabled"
            role="button"
            title
          >
            <span
              class="ui-button-icon-primary ui-icon ui-icon-triangle-1-e"
            ></span
            ><span class="ui-button-text"></span>
          </div>
        </div>
      </div>
      <div class="clear"></div>

      <button
        id="download-all"
        class="ui-btn-small ui-button-inverse ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary ui-button-disabled ui-state-disabled"
        role="button"
        disabled
      >
      <span class="ui-button-text">Download All</span>
      </button>
    </div>

    <div id="footer">
      <div id="bottom">
        <div id="like-it">Like it? Share it!</div>
        <div
          id="share"
          class="share"
          data-url="https://ebook2pdf.com/"
          data-title="Convert EPUB, MOBI, AZW and FB2 eBooks to PDF">
          <div style="clear: both"></div>
        </div>
        <p id="footer-privacy">All uploaded data is deleted after 1 hour.</p>
        <p id="footer-copy">© 2021 Media4x</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import LogoIcon from "./Logo.vue";

export default defineComponent({
  name: "HelloWorld",
  components: { LogoIcon },
  setup: () => {
    const count = ref(0);
    return { count };
  },
  mounted() {
  }
});
</script>

<style scoped>

</style>
