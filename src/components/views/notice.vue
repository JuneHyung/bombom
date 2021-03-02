<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>공지사항 </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              등록
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <h3>제목</h3>
                    <v-text-field
                      v-model="editedItem.noticeTitle"
                      label="제목을 입력해 주세요."
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <h3>내용</h3>
                    <v-textarea
                      solo
                      v-model="editedItem.noticeContent"
                      label="내용을 입력해 주세요."
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">리얼 삭제하시겠습니까?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDetail" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">내용확인</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <h3>제목</h3>
                    <v-text-field v-model="editedItem.noticeTitle" readonly></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <h3>작성일</h3>
                    <v-text-field v-model="editedItem.noticeDate" readonly></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <h3>조회수</h3>
                    <v-text-field v-model="editedItem.noticeView" readonly></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <h3>내용</h3>
                    <v-textarea solo v-model="editedItem.noticeContent" readonly></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDetail">
                닫기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }" v-if="memberInfo === null">
      <v-icon small @click="detailItem(item)">i</v-icon>
    </template>
    <template v-slot:item.actions="{ item }" v-else-if="memberInfo.memberId === 'admin'">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small class="mr-2" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
      <v-icon small @click="detailItem(item)">i</v-icon>
    </template>
    <template v-slot:item.actions="{ item }" v-else>
      <v-icon small @click="detailItem(item)">i</v-icon>
    </template>
  </v-data-table>
</template>
<script>
import http from '@/util/http-common';
import { mapState } from 'vuex';
export default {
  data: function() {
    return {
      headers: [
        {
          text: '글 번호',
          align: 'start',
          value: 'noticeNo',
        },
        { text: '제목', value: 'noticeTitle' },
        { text: '작성일', value: 'noticeDate' },
        { text: '조회수', value: 'noticeView' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      dialog: false,
      dialogDelete: false,
      dialogDetail: false,
      editedIndex: -1,
      editedItem: {
        noticeNo: '',
        noticeTitle: '',
        noticeContent: '',
        noticeView: 0,
      },
      defaultItem: {
        noticeNo: '',
        noticeTitle: '',
        noticeContent: '',
        noticeView: 0,
      },
      items: [],
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? '등록하기' : '수정하기';
    },
    ...mapState(['memberInfo']),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    http
      .get('/notice')
      .then(({ data }) => {
        this.items = data;
      })
      .catch(() => {
        alert('에러가 발생하였습니다.');
      });
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      http
        .delete(`/notice/${this.editedItem.noticeNo}`, {
          noticeNo: this.editedItem.noticeNo,
        })
        .then(() => {
          alert('삭제에 성공했습니다.');
        })
        .catch(() => {
          alert('삭제 실패했습니다.');
        });
      this.closeDelete();
    },

    detailItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      http
        .put(`/notice/view/${this.editedItem.noticeNo}`, {
          noticeNo: this.editedItem.noticeNo,
          noticeView: this.editedItem.noticeView,
        })
        .then(() => {})
        .catch(() => {
          alert('실패!');
        });
      this.dialogDetail = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDetail() {
      this.dialogDetail = false;
      location.href = '/notice';
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
        http
          .put(`/notice/${this.editedItem.noticeNo}`, {
            noticeNo: this.editedItem.noticeNo,
            noticeTitle: this.editedItem.noticeTitle,
            noticeContent: this.editedItem.noticeContent,
          })
          .then(() => {
            alert('수정 성공했습니다.');
          })
          .catch(() => {
            alert('수정 실패했습니다.');
          });
      } else {
        this.items.push(this.editedItem);
        http
          .post(`/notice`, {
            noticeTitle: this.editedItem.noticeTitle,
            noticeContent: this.editedItem.noticeContent,
          })
          .then(() => {
            alert('작성 성공했습니다.');
          })
          .catch(() => {
            alert('작성 실패했습니다.');
          });
      }
      this.close();
      location.href = '/notice';
    },
  },
};
</script>
<style></style>
