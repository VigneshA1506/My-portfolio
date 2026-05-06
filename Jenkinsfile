pipeline {
    agent any
 
    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO = '452401280487.dkr.ecr.us-east-1.amazonaws.com/my-react-app'
    }
 
    stages {
 
        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/VigneshA1506/My-portfolio.git',
                    credentialsId: 'github-creds'
            }
        }
 
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-react-app .'
            }
        }
 
        stage('Login to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region us-east-1 \
                | docker login --username AWS --password-stdin 452401280487.dkr.ecr.us-east-1.amazonaws.com
                '''
            }
        }
 
        stage('Tag Docker Image') {
            steps {
                sh '''
                docker tag my-react-app:latest 452401280487.dkr.ecr.us-east-1.amazonaws.com/my-react-app:latest
                '''
            }
        }
 
        stage('Push Docker Image to ECR') {
            steps {
                sh '''
                docker push 452401280487.dkr.ecr.us-east-1.amazonaws.com/my-react-app:latest
                '''
            }
        }
 
        stage('Deploy to App EC2') {
            steps {
                sshagent(credentials: ['ec2-ssh']) {
 
                    sh """
                    ssh -o StrictHostKeyChecking=no ec2-user@100.31.251.63 '
 
                        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 452401280487.dkr.ecr.us-east-1.amazonaws.com
 
                        docker pull 452401280487.dkr.ecr.us-east-1.amazonaws.com/my-react-app:latest
 
                        docker stop my-app || true
                        docker rm my-app || true
 
                        docker run -d -p 80:80 --name my-app 452401280487.dkr.ecr.us-east-1.amazonaws.com/my-react-app:latest
                    '
                    """
                }
            }
        }
    }
 
    post {
        success {
            echo 'Pipeline executed successfully!'
        }
 
        failure {
            echo 'Pipeline failed!'
        }
    }
}