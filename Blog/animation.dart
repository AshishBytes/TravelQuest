import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Animation',
      home: ButtonFade(),
    );
  }
}

class ButtonFade extends StatefulWidget {
  @override
  createState() => ButtonFadeState();
}

class ButtonFadeState extends State<ButtonFade> {
  double opacityLevel = 1.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Button Animation")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedOpacity(
              opacity: opacityLevel,
              duration: Duration(seconds: 10),
              child: ElevatedButton(
                child: Text('Fade me'),
                onPressed: () {
                  setState(() => opacityLevel = opacityLevel == 0 ? 1.0 : 0.0);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
