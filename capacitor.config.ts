import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shadowchat.app',
  appName: 'SHADOW CHAT',
  webDir: 'www',
  server: {
    url: 'https://shadow-chat-8t8nln.v2.appdeploy.ai/',
    cleartext: false
  }
};

export default config;
