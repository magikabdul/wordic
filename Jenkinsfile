pipeline {
  agent {
    node {
      label 'wordic-front-do-138.68.77.165'
    }

  }
  stages {
    stage('environment') {
      steps {
        sh 'hostname'
        sh 'id'
        sh 'whoami'
        sh 'ip addr show eth0'
        sh 'cat /etc/os-release'
        sh 'uname -a'
        sh 'env'
        sh 'pwd'
        sh 'sudo docker -v'
      }
    }

    stage('git clone') {
      steps {
        git(url: 'https://github.com/magikabdul/wordic', branch: 'develop', credentialsId: 'github-magikabdul')
      }
    }

    stage('npm install') {
      steps {
        sh 'pwd'
        sh 'sudo rm -rf ${PWD}/react-frontend/build'
        sh 'sudo docker  run --rm -v ${PWD}/react-frontend:/wordic -w /wordic node:lts-slim npm ci'
      }
    }

    stage('npm build') {
      steps {
        sh 'sudo docker  run --rm -v ${PWD}/react-frontend:/wordic -w /wordic node:lts-slim npm run build'
      }
    }

    stage('copy resources') {
      steps {
        sh 'cp -r ${PWD}/react-frontend/build/* /root/wordic-configuration/data'
      }
    }

    stage('success') {
      steps {
        discordSend webhookURL: DISCORD_WEBHOOK_URL, 
          description: '**Build** #${currentBuild.number}', 
          footer: 'Result - ${currentBuild.currentResult}',
          result: currentBuild.currentResult,
          title: 'Wordic',
      }
    }

  }
  environment {
    DISCORD_WEBHOOK_URL = credentials('discord-webhook')
  }
}
