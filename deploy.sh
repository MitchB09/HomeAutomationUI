# Build react app
npm run-script build

# Deploy to raspberrypi
scp -r build/ pi@192.168.2.73:/apps/home-page

# Restart service
ssh pi@192.168.2.73 "sudo service nginx restart"