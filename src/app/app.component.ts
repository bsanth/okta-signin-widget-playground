import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullCode: string;
  configString: string;
  configJson: any;
  styles: String = '';

  ngOnInit() {
    this.configJson = {
      baseUrl: 'https://bsanth.oktapreview.com'
    };

    this.createIFrame();
  }

  createIFrame() {
    this.configString = JSON.stringify(this.configJson);

    this.fullCode = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Strict//EN" "http://www.w3.org/TR/html4/strict.dtd">\n' +
      '<html>\n' +
      '<head>\n' +
      '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
      '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
      '\n' +
      '    <title>Sign in</title>\n' +
      '\n' +
      '    <script type="text/javascript" src="https://op1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/js/okta-sign-in.min.js"></script>\n' +
      '\n' +
      '    <link rel="stylesheet" type="text/css" href="https://op1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.6.0/css/okta-sign-in.min.css">\n' +
      '\n' +
      '    <style>\n' + this.styles +
      '\n    </style>' +
      '\n' +
      '</head>\n' +
      '<body>\n' +
      '    <div id="okta-login-container"></div>\n' +
      '    <script type="text/javascript">\n' +
      '\n' +
      '      // config\n' +
      '      var config = ' + this.configString + ';' +
      '\n' +
      '\n' +
      '      // render widget\n' +
      '      var oktaSignIn = new OktaSignIn(config);\n' +
      '      oktaSignIn.renderEl({ el: \'#okta-login-container\' },\n' +
      '        function(res) {\n' +
      '          // success fn\n' +
      '          res.session.setCookieAndRedirect(\'https://bsanth.oktapreview.com\');\n' +
      '        },\n' +
      '        function(error) {\n' +
      '          // failure fn\n' +
      '          console.log(error.message, error);\n' +
      '        }\n' +
      '      );\n' +
      '    </script>\n' +
      '</body>\n' +
      '</html>';

    const iFrame = document.createElement('iframe');
    document.getElementById('preview').innerHTML = '';
    document.getElementById('preview').appendChild(iFrame);
    iFrame.id = 'previewFrame';
    iFrame.width = '100%';
    iFrame.height = '100%';
    iFrame.style.border = '1px solid';
    iFrame.contentWindow.document.open();
    iFrame.contentWindow.document.write(this.fullCode);
    iFrame.contentWindow.document.close();
  }

  addUsername() {
    this.configJson.username = 'INSERT USERNAME HERE';
    this.createIFrame();
  }

  changeBackground() {
    this.styles += '        #okta-sign-in {\n' +
      '            background: red;\n' +
      '        }'
    this.createIFrame();
  }
}
