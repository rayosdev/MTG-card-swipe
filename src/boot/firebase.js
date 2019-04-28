import firebase from 'firebase'

const config = {
        apiKey: "AIzaSyB5mK5CnprDewcxrh2qam0L5SK7t7B9GCc",
        authDomain: "fantasy-deck.firebaseapp.com",
        databaseURL: "https://fantasy-deck.firebaseio.com",
        projectId: "fantasy-deck",
    }

export default () => {
    firebase.initializeApp(config)
}