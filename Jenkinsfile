pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
              git branch: 'main', url: 'https://github.com/huyhoang2002/first-jenkins-repo.git'
            }
        }
        stage('Deploy') {
            steps {    
              sh 'docker-compose pull'     
              sh 'docker compose up --detach'
            }
        }
    }
}