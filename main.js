const { createApp } = Vue  


createApp({
  data() {  
    return {
      contacts: [
        {
            name: 'Michele',
            avatar: 'asset/img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: 'asset/img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: 'asset/img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: 'asset/img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: 'asset/img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: 'asset/img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                }
            ],
        },
        {
            name: 'Federico',
            avatar: 'asset/img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                }
            ],
        },
        {
            name: 'Davide',
            avatar: 'asset/img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    status2: 'sent-txt',
                    status3: 'sent-time',
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received',
                    status2: 'received-txt',
                    status3: 'received-time',
                }
            ],
        }
    ],

    chatinput: "",

    selectedchat: 0,

    selectedmsg: 0,

    namefilter: "",

    filteredcontacts: [],

    msgvisstat: "none",

    }
  },
  mounted(){
   
  },
  methods: {
    selectchat(index){
      this.selectedchat = index

      this.msgvisstat = "none"
    },
    postchatinput(){
      let now = new Date();
      let year = now.getFullYear();
      let month = ('0' + (now.getMonth() + 1)).slice(-2);
      let day = ('0' + now.getDate()).slice(-2);
      let hours = ('0' + now.getHours()).slice(-2);
      let minutes = ('0' + now.getMinutes()).slice(-2);
      let seconds = ('0' + now.getSeconds()).slice(-2);
      let timestamp = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;      
      this.contacts[this.selectedchat].messages.push({
        date: timestamp,
        message: this.chatinput,
        status: 'sent',
        status2: 'sent-txt',
        status3: 'sent-time',
      });
      setTimeout(this.risposta, 3000);
    },
    risposta(){
      let now = new Date();
      let year = now.getFullYear();
      let month = ('0' + (now.getMonth() + 1)).slice(-2);
      let day = ('0' + now.getDate()).slice(-2);
      let hours = ('0' + now.getHours()).slice(-2);
      let minutes = ('0' + now.getMinutes()).slice(-2);
      let seconds = ('0' + now.getSeconds()).slice(-2);
      let timestamp = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
      this.contacts[this.selectedchat].messages.push({
        date: timestamp,
        message: "ok",
        status: 'received',
        status2: 'received-txt',
        status3: 'received-time',
      });
    },
    msgmenuvschange(index, element){

      this.selectedmsg = index

      console.log(this.selectedmsg)

      if (this.msgvisstat == 'visible') {
        this.msgvisstat = 'none'
      } else {
        this.msgvisstat = 'visible'
      } 

    },
    deletemsg(){
      if (this.selectedmsg != 0) {
        this.contacts[this.selectedchat].messages.splice(this.selectedmsg, 1)
      }   
    }
  }

}).mount('#app')