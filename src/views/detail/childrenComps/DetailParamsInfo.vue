<template>
  <div class="detail-params-info" v-if="Object.keys(detailParams).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in detailParams.rule.tables"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(item, index) in detailParams.info.set" :key="index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="imageInfo.length !== 0">
      <img :src="detailParams.info.images[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {
    imageInfo() {
      return this.detailParams.info.images ? this.detailParams.info.images : ""
    }
  },
  methods: {},
  watch: {}
}
</script>
<style scoped lang="less">
.detail-params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.detail-params-info table {
  width: 100%;
  border-collapse: collapse;
}

.detail-params-info table tr {
  height: 42px;
}

.detail-params-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  margin-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
