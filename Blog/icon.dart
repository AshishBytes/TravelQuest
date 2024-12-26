import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: MyIconPage());
  }
}

class MyIconPage extends StatefulWidget {
  @override
  _MyIconPageState createState() => _MyIconPageState();
}

class _MyIconPageState extends State<MyIconPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Icon'),
      ),
      body: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          Icon(Icons.camera_enhance),
          Icon(Icons.favorite),
          Icon(Icons.audiotrack),
        ],
      ),
    );
  }
}
