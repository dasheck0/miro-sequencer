## Sequencer

This is a miro plugin that helps creating content based on rules, such as sequences. In version 1.0.0 there are two modes namely sequencer and split. 

- Sequencer allows you to generate certain Items (e.g. Sticky Note, Text) based on some rules. Supply a start value and specify an increment and how many items you want. The sequencer will create the amount of items specified by `count` with the content specified in `formula`, where `$i` is replaced with the current index

- Split allows you to split the text of a given item (e.g. Sticky Note, Text) at a delimitter of your choice. You may also choose the type of the newly created items

The plugin currently supports the following item types:

- Sticky Note
- Text
- Shape (Rectangle only)
- Frame (Sets the frame title)
- Card

This is due to the limitation of the Web SDK. We will add more item types, as soon as they are supported by the Miro Web SDK.

![showcase](art/output.gif)

## Development
<!-- section: Development -->
<!-- If you software is developed within a team you shhould include this section. Describe how to setup thhe project. Include dependencies, conventions and other things to know in order to start developing. In short: After reading this section everyone should be able to develop this piece of software. -->
<!--
Possible subsections

### How to setup and run this project
### Commit messages
### How to publish a release
### Tests
-->

### How to setup and run this project
* Checkout this project
* Run `npm i` to install dependencies
* Run `npm run start` to start application in development mode (localhost: 3000)
* Setup Miro app and follow steps (see [here](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-a-developer-team-in-miro))

### Commit messages
We enforce the conventional commit message style. This allows us to generate a changelog based on commit messages. When installing dependencies for this project husky webhooks are installed to check your commit message style before you commit. For a more detailed view on how to write commit messages see: [here](https://www.conventionalcommits.org/en/v1.0.0/#summary)].

## Contributing
<!-- section: Contributing -->
<!-- Describe what action one should take in order to contribute. Does a certain styleguide has to be adhered. How can one apply changes (i.e. push vs. pull request)? -->
Bug reports and pull requests are welcome on GitHub at https://github.com/dasheck0/miro-sequencer/issues. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
<!-- section: License -->
<!-- Describe the license under which your software is published. Note that an unlicensed piece of software is most likely never used. So do not skip tihs part! -->
```
MIT License Copyright (c) 2023 Stefan Neidig

Permission is hereby granted, free
of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice
(including the next paragraph) shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```