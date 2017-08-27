<template>
  <div class="admin-container" :class="{hideSlidebar:isCollapse}"> 
    <slider-bar :isCollapse="isCollapse"></slider-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <admin-content></admin-content>
    </div>
  </div>
</template>

<script>
import SliderBar from '../layout/slidebar'
import NavBar from '../layout/navbar'
import AdminContent from '../layout/adminContent'
import { mapState } from 'vuex'

export default {
  name: 'index',
  components: {
    SliderBar,
    NavBar,
    AdminContent
  },
  data () {
    return {
      
    }
  },
  computed: mapState([
    'isCollapse'
  ]),
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.el-menu-container {
  transition: width .28s ease-out;
  // width: 180px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
}
.el-menu-container:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.main-container {
  margin-left: 180px;
  transition: margin-left .28s ease-out;
  .navbar {
    height: 50px;
    line-height: 50px;
    .tmc-menu-item {
      height: 50px;
      line-height: 50px;
    }
    .el-menu-item,.el-submenu__title {
      height: 50px;
    line-height: 50px;
    }
    .levelbar.el-breadcrumb {
      display: inline-block;
      line-height: 50px;
    }
  }
  .crumbs {
    float: left;
    height: 50px;
    line-height: 50px;
  }
}
.hideSlidebar .main-container {
  margin-left: 64px;
  .svg-icon {
    transform: rotate(90deg)
  }
}
.svg-icon {
  margin-right: 10px;
  cursor: pointer;
  transition: .38s;
}
</style>
