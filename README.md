# RedstoneAI

### AI Redstone Contraption Creator

This is a web app that uses AI models to generate Redstone contraptions from natural language descriptions. It also has a 3D interactive display of the contraption, so the user can test if the thing works.

## Usage

It's not hosted right now. However, you can read the development section below, to see how to run it on your machine.

<!-- To use the web app, simply run `bun run dev` or `npm run dev` and visit `http://localhost:3000` in your web browser. You can then enter a natural language description of the contraption you want to create in the text box and click the "Generate" button. The app will then generate the contraption and display it in the 3D interactive display. You can then test if the contraption works by moving the blocks around and interacting with them. -->

## Development

To run the web app locally, you will need to install Node.js and [npm](https://npmjs.com) or [Bun](https://bun.sh). Once you have installed Node.js and npm or bun, you can install the dependencies for the web app by running `npm i` or `bun i`.

To start the development server, run `npm run dev` or `bun run dev`.

The development server will run on port 3000. You can then visit `http://localhost:3000` in your web browser to view the web app.

The app's code is in the `/src/app` directory.


## API

> [!IMPORTANT]
> This is only for demonstration purposes, the API isn't available, because I haven't trained the AI yet.

The API is available at /api/prompt. It takes a JSON object with the following fields:

```json
{
  "prompt": "The natural language description of the contraption.",
  "version": "1.20"
}
```

See the table below for more info on versions

> [!NOTE]
> This version is WIP and might change

| Model Version | Minecraft Version |
| --- | --- |
| 1.20 | 1.20+ |

**Remember to use the `Authentication` header with your API key**

and returns a JSON object with the following fields:

```json
{
  "blocks": [
    {
        "type": "minecraft:redstone_block",
        "position": [0, 0, 0]
    },
    {
        "type": "minecraft:piston",
        "position": [0, 1, 0],
        "facing": "up"
    },
    //...
  ]
}
```

- **"facing"**: The rotation of the block, either `up`, `down`, `north`, `south`, `east`, or `west`.
- **"state"**: Either `on` or `off`. Used for levers or redstone repeaters.
- **"locked"**: A boolean value (`true` or `false`) representing the [lock state of a repeater](https://minecraft.wiki/w/Redstone_Repeater#Signal_locking).
- **"delay"**: An integer value from 1 to 4 representing the repeater's delay.
- **"subtract"**: A boolean value for [repeater's subtract mode](https://minecraft.wiki/w/Redstone_Comparator#Subtract_signal_strength).
- **"open"**: Boolean value applicable to doors and fence gates.
- **"page"**: number from 1 to 15 used for the page selected on a lectern. It's limited because this is mainly used for the redstone signal, so no more is necessary.
- **"inverted"**: Boolean value applicable to daylight detectors. Read more [here](https://minecraft.wiki/w/Daylight_Detector#Inverted_Daylight_Detector).
The `blocks` field is an array of objects, each of which represents a block in the contraption. The `type` field is the type of the block, and the `position` field is the position of the block in the world. The block can also contain these fields, however, they may be undefined if that block doesn't support it[^1]:
[^1]: Bolded states are implemented to the simulator


## License

This web app is licensed under the MIT License. Feel free to contribute!
