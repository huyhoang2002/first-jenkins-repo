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
              sh 'sudo bash'
              sh 'docker compose up'
            }
        }
    }
}