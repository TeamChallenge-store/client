pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clean Up Old Containers and Images') {
            steps {
                script {
                    sh 'sudo docker-compose -f $COMPOSE_FILE down'
                    sh 'sudo docker rm -f $(sudo docker ps -aq --filter "label=com.example.project=front") || true'
                    sh 'sudo docker rmi -f $(sudo docker images -aq) || true'
                }
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'develop', url: 'https://github.com/TeamChallenge-store/client.git'
            }
        }

        stage('Build and Deploy') {
            steps {
                script {
                    sh 'sudo docker-compose -f $COMPOSE_FILE build'
                    sh 'sudo docker-compose -f $COMPOSE_FILE up -d'
                }
            }
        }
    }
}
